export default function GetStarted() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-lg font-semibold">Get Started</h1>

      <div className="bg-gray-900 p-4 rounded-lg text-sm">
        POST /events
      </div>

      <pre className="bg-gray-900 p-4 rounded-lg text-xs">
{`{
  "service": "api",
  "type": "error",
  "message": "DB timeout"
}`}
      </pre>
    </div>
  );
}