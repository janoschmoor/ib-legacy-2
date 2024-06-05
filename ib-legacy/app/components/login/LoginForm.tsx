

export default function LoginForm() {
    return (
        <form className="flex flex-col space-y-2.5">
            <input
                type="text"
                placeholder="Username"
                className="rounded-lg p-2 border border-gray-300"
            />
            <input
                type="password"
                placeholder="Password"
                className="rounded-lg p-2 border border-gray-300"
            />
            <button
                type="submit"
                className="rounded-lg p-2 bg-blue-500 text-white"
            >
                Login
            </button>
        </form>
    );
}