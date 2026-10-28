/*
* FileName: SearchBox.tsx
* Name: Evgeny Kutepov
* Date: 2026/10/26
* This search box will let users filter the student list by name.
* It takes in 2 props, value, and onChange is a callBack that is coming from StudentPortal.
* It is the controlled input, it shows the value and sends the keystrokes through the onChange.
* This doesn't store any state on its own and the actual filter happens at the StudentPortal.
* It outputs a styled text input.
* 
*/

"use client"
// Props
interface SearchBoxProps {
    value: string;
    onChange: (text: string) => void;
}
// Component
const SearchBox = ({ value, onChange }: SearchBoxProps) => {
    return (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            placeholder="Search by Name"
            className="w-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm" />
    )
};

export default SearchBox;