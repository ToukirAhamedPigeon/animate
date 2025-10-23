'use client';


export default function AnimationCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
        <div>{children}</div>
        </div>
    );
}