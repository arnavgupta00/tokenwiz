export default function Nav() {
  var isloggedin: boolean = true    ;

  return (
    <nav className="bg-blue-800	 h-16 w-screen flex justify-between items-center">
      <div className="text-white ml-8 text-xl">TokenWiz</div>
      <div className="flex justify-between items-center mr-4">
        {isloggedin ? (
          <div className="text-white mr-4 flex flex-row justify-center items-center gap-4">
            <p>Welcome, Name</p>
            <div className="w-8 h-8 rounded-full bg-white"></div>
          </div>
        ) : (
          <div>
            <button className="text-white mr-4">Login</button>
            <button className="text-white">Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
}
