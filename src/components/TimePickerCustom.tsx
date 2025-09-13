import React, { useState, useEffect, useRef } from "react";
import TimeKeeper from "react-timekeeper";
import { CodeComponentMeta } from "@plasmicapp/host";

type TimePickerProps = {
  onChange?: (values: { hour: number; minute: number; date: Date }) => void;
  SelectedHour?: number;
  SelectedMinute?: number;
  className?: string;
};

export const TimePickerCustom = (props: TimePickerProps) => {
  const {
    onChange,
    SelectedHour = 9,
    SelectedMinute = 30,
    className,
  } = props;

  const initialTime = `${SelectedHour}:${SelectedMinute
    .toString()
    .padStart(2, "0")}`;

  const [time, setTime] = useState(initialTime);
  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    const [h, m] = time.split(":").map(Number);
    const now = new Date();
    const date = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      h,
      m
    );

    if (onChangeRef.current) {
      onChangeRef.current({
        hour: h,
        minute: m,
        date,
      });
    }
  }, [time]);

  return (
    <div className={className}>
      <TimeKeeper
        time={time}
        onChange={(newTime) => setTime(newTime.formatted24)}
        switchToMinuteOnHourSelect
      />
    </div>
  );
};

export const TimePickerCustomMeta: CodeComponentMeta<TimePickerProps> = {
  name: "TimePickerCustom",
  importPath: "@/components/TimePickerCustom",
  props: {
    onChange: {
      type: "eventHandler",
      argTypes: [
        {
          name: "selectedValues",
          type: "object",
        },
      ],
      description:
        "Callback function to handle changes in selected hour and minute.",
    },
    SelectedHour: {
      type: "number",
      defaultValue: 9,
    },
    SelectedMinute: {
      type: "number",
      defaultValue: 30,
    },
  },
  states: {
    value: {
      type: "writable",
      variableType: "object",
      valueProp: "selectedValues",
      onChangeProp: "onChange",
    },
  },
};
