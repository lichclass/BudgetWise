import Main from "@/Layouts/Main";
import { Head } from '@inertiajs/react';
import { useForm } from "@inertiajs/react";
import InputField from "@/Components/MainInputField";
import SubmitBtn from "@/Components/GreenBtnMed";
import DeleteBtn from "@/Components/DeleteUserBtn";

function EditAdmin(user) {

    const { data, setData, put } = useForm({
        email: user.email,
        username: user.username,
        password: user.password,
    });

    function submit(e) {
        console.log(user);
        // console.log("Email: ", user.email);
        // put(route("user.update", user.user_id));
    }

    return (
        <>
            <Head title="Edit User" />

            <Main isSettings={true} isAdmin={true}>
                <div className="h-full w-full flex flex-col gap-10 px-16 lg:px-24 py-20">

                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold text-[#E5EFDDF2]">Edit User</h1>
                        <h1 className="text-xl text-[#E5EFDDF2]">User Email</h1>
                    </div>

                    <form action="" onSubmit={submit} className="flex flex-col gap-7">
                        <InputField
                            label="Email"
                            labelSize="text-lg"
                            htmlFor="email"
                            type="text"
                            name="email"
                            placeholder={user.email}
                            value={user.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputField
                            label="Username"
                            labelSize="text-lg"
                            htmlFor="username"
                            type="email"
                            name="username"
                            placeholder={user.username}
                            value={user.username}
                            onChange={(e) => setData('username', e.target.value)}
                        />
                        <InputField
                            label="Password"
                            labelSize="text-lg"
                            htmlFor="password"
                            type="password"
                            name="password"
                            placeholder={user.password}
                            value={user.password}
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <div className="flex flex-row self-end gap-2 w-full lg:w-2/5 mt-20">
                            <DeleteBtn user_id={user.user_id} width="flex-grow" />
                            <SubmitBtn text="Save" width="flex-grow"/>
                        </div>
                    </form>

                </div>
            </Main>
        </>

    );
}

export default EditAdmin;