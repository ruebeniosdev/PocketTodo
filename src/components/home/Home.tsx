import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
     <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight">
          Pocke<span className="text-blue-500">Todo</span>
        </h1>
        <p className="text-gray-600 text-center text-lg">
          Organize your tasks, boost your productivity.<br />
          Sign up or log in to get started!
        </p>
        <div className="flex gap-4 w-full">
          <Link to="/login" className="w-1/2">
            <Button className="w-full py-2 text-base font-semibold shadow">
              Login
            </Button>
          </Link>
          <Link to="/register" className="w-1/2">
            <Button variant="outline" className="w-full py-2 text-base font-semibold">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
