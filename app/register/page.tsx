import Auth from "../components/auth";
import Button from "../components/button";
export default function Register() {
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
                        <label htmlFor="">Create Password</label>
                        <input
                            type="text"
                            className="mt-1 rounded-lg border px-4 py-3 outline-none"
                            placeholder="At least 8 characters"
                        />
                    </div>

                    <div className="text-dark-grey flex flex-col pb-6 text-xs">
                        <label htmlFor="">Confirm Password</label>
                        <input
                            type="text"
                            className="mt-1 rounded-lg border px-4 py-3 outline-none"
                            placeholder="At least 8 characters"
                        />
                    </div>
                    <Button className="bg-purple w-full rounded-lg py-3 text-white">
                        Create new account
                    </Button>
                </form>
            </section>
        </Auth>
    );
}
