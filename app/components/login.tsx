import Auth from "./auth";
import Button from "./button";

export default function Login() {
    return (
        <Auth>
            <section className="">
                <form action="">
                    <div className="text-dark-grey flex flex-col text-xs">
                        <label htmlFor="">Email address</label>
                        <input
                            type="email"
                            className="mt-1 rounded-lg border px-4 py-3 outline-none"
                            placeholder="e.g: alex@email.com"
                        />
                    </div>

                    <div className="text-dark-grey flex flex-col pb-6 pt-6 text-xs">
                        <label htmlFor="">Password</label>
                        <input
                            type="text"
                            className="mt-1 rounded-lg border px-4 py-3 outline-none"
                            placeholder="Enter your password"
                        />
                    </div>
                    <Button className="bg-purple w-full rounded-lg py-3 text-white">
                        Login
                    </Button>
                </form>
            </section>
        </Auth>
    );
}
