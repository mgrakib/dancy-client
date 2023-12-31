/** @format */

const TableData = ({ users: data, handelRoleChange }) => {
	return (
		<div>
			<div className='overflow-x-auto'>
				<table className='table dark:bg-dashboard-color dark:rounded-sm dark:text-dark-gray-color'>
					{/* head */}
					<thead className="dark:text-dark-gray-color">
						<tr>
							<th>#</th>

							<th>Email</th>
							<th>Role</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={item._id}>
								<td>{index + 1}</td>

								<td>{item?.email}</td>
								<td>{item?.role || "Student"}</td>
								<td className=' flex items-center justify-center gap-2'>
									{/* TODO: disable btn not invisibal */}
									<button
										onClick={() =>
											handelRoleChange("admin", item)
										}
										className={`${
											item?.role === "admin"
												? "bg-rose-200"
												: "bg-green-200"
										} px-3 py-1 rounded-md`}
										disabled={item?.role === "admin"}
									>
										Admin
									</button>
									<button
										onClick={() =>
											handelRoleChange("instractor", item)
										}
										className={`${
											item?.role === "instractor"
												? "bg-rose-200"
												: "bg-green-200"
										} px-3 py-1 rounded-md`}
										disabled={item?.role === "instractor"}
									>
										Instractor
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableData;
