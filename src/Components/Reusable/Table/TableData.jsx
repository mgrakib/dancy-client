
const TableData = ({ users:data }) => {
	
	console.log(data)
	return (
		<div>
			<div className='overflow-x-auto'>
				<table className='table table-zebra'>
					{/* head */}
					<thead>
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th className='text-center'>Action</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={item._id}>
								<td>{index + 1}</td>
								<td>{item?.name}</td>
								<td>{item?.email}</td>
								<td>{item?.role || "Student"}</td>
								<td className=' flex items-center justify-center gap-2'>
									{!item.role ? (
										<>
											<button className='bg-green-200 px-3 py-1 rounded-md'>
												Admin
											</button>
											<button className='bg-rose-200 px-3 py-1 rounded-md'>
												Instractor
											</button>
										</>
									) : (
										<>
											{item.role === "instractor" ? (
												<button className='bg-green-200 px-3 py-1 rounded-md'>
													Admin
												</button>
											) : (
												<>admin</>
											)}
										</>
									)}
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