import { useEffect, useState } from "react";
import { cn } from '../utils/utils';

const RadioGroup = ({ name, items, value, onChange }) => {
    return(
        <div className="flex flex-row flex-wrap gap-4 py-2">
            { items.map((item, index) => (
                <label
                    className={cn({
                        "bg-slate-100 py-2 px-4 rounded-full cursor-pointer hover:bg-pokered-500 hover:text-white": true,
                        "bg-pokered-500 text-white": value === item.value
                    })}
                    key={index}
                    htmlFor={name + item.value}
                >
                    <span className="select-none">{item.label}</span>

                    <input
                        className="hidden"
                        id={name + item.value}
                        type="radio"
                        name={name}
                        value={item.value}
                        onChange={(e) => onChange(e.target.value)}
                        checked={value === item.value}
                    />
                </label>
            )) }
        </div>
    );
};

export default RadioGroup;