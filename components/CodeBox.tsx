'use client';


interface CodeBoxProps {
    code: string;
}


export default function CodeBox({ code }: CodeBoxProps) {
    return (
        <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-auto">
        <code>{code}</code>
        </pre>
    );
}