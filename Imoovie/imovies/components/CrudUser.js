import AddUser from "./AddUser.js"
import EditUser from "./EditUser.js"
import { useRef, useState } from "react";
import axios from "axios";

export default  function CrudUser({users}) {
    const [showModal, setShowModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [seletedUser, setSeletedUser] = useState(null);

    return ( <>
        <div className="container">
            <h3>Crud User</h3>
            <button onClick={() => setShowModal(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add New User</button>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Id</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Username</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Email</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Password</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Role</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Update</th>
                        <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user=> (
                        <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td> {user.id}</td>
                            <td className="font-bold text-xl my-2"> {user.username}</td>
                            <td> {user.email}</td>
                            <td className="font-bold">{user.password}</td>
                            <td className="font-bold"> {user.role}</td>
                            <td><button onClick={() => (setSeletedUser(user), setShowEditUserModal(true))}
                                className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button></td>
                            <td><button onClick={() => deleteUser(user)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {(showModal) ? <AddUser closeModal={() => setShowModal(false)}></AddUser> : null}
            {showEditUserModal ? ( <EditUser user={seletedUser} closeModal={() => setShowEditUserModal(false)} />) : null}
            
        </div>
    </> )
}async function deleteUser(user) {
    if (window.confirm("Do you want to delete this user?")) {
        await axios.post("/api/deleteUser", { id: parseInt(user?.id) });
        window.location.reload();
    }
  }

