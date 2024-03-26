import Layout from "../../components/Layout";

const Expense = () =>{
    
    return(
        
        <>
            <Layout >
            <div className="row justify-content-md-center">
                <h1>
                    Add expenses
                </h1>
                <div className="form">
                    <ul>
                        <label className="id" id="id">EmployeeId</label><> </>
                        <input type="number" className="id" id="id"></input>
                    </ul>
                    
                    <ul>
                        <label className="date" id="date">DateOfRequest</label><> </>
                        <input type="datetime" className="date" id="date"></input>
                    </ul>

                    <ul>
                        <label className="desc" id="desc">ExpenseDescription</label><> </>
                        <input type="text" className="desc" id="desc"></input>
                    </ul>
                    
                    <ul> <label className="type" id="type">ExpenseType</label><> </>
                        <input type="text" className="type" id="type"></input>
                        
                    </ul>
                    
                    <ul>
                        <label className="amt" id="amt">Amount</label><> </>
                        <input type="number" className="amt" id="amt"></input>
                    </ul>
                    
                    <ul>
                        <label className="man" id="man">ManagerName</label><> </>
                        <input type="text" className="man" id="man"></input>
                    </ul>
                    

                    {/* <label className="status" id="status">StatusOfRequest</label>
                    <input type="text" className="status" id="status"></input> */}
                    
                    
                        
                </div>

            </div>
            
            </Layout>
        </>
    )
}

export default Expense;