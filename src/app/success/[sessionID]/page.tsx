"use client";



export default function Success({ params }: { params: { sessionID: string } }) {
  const session_id = params.sessionID;

  const copyToClipboard = () => {
    const textToCopy = `${session_id}`;
    navigator.clipboard.writeText(textToCopy);
    alert("Copied to clipboard!");
  };



  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gray-50 p-8 gap-8">
      <h1 className="text-black font-light text-3xl">Payment Successful✅</h1>
      <p className="text-black font-light text-3xl">
        Thank you for your purchase
      </p>
      <p className="text-black font-light text-xl">Session ID: {session_id}</p>
      <p className="text-black font-light text-3xl">
        In case of any problem share your Email and Session ID{" "}
      </p>
      <button className="bg-blue-500 p-4 rounded-3xl" onClick={copyToClipboard}>
        Copy Session ID
      </button>
    </div>
  );
}
