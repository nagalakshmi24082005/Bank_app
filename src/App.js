/*import React, { useState } from 'react';

const App = () => {
  const [tasks, setTask] = useState([]);  
  const [value, setValues] = useState("");

  function addItem(e) {
    e.preventDefault();  
    if (!value) {
      return;  
    }
    const newTask = [...tasks, { text: value }];  
    setTask(newTask);
    setValues("");  
  }
  function removeItem(e,id){
    let temp=[...tasks];
    temp.splice(id,1);
    setTask(temp);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <form>  
        <input
          type="text"
          className="input"
          placeholder="Add"
          value={value}
          onChange={(e) => setValues(e.target.value)} 
        />
        <button onClick={addItem}>Submit</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.text}</li>  
        ))}
      </ul>

      {tasks.map((item, id) => (
         <div className='task' id={id}>
          {item.text}
        <button className='btn_remove' onClick={(e)=>removeItem(e,id)}>Remove</button>
        </div>
        ))
        }

</div>
  
  );
}

export default App;
*/


/*import React, { useState } from 'react'


const App = () => {
  const [Transaction,setTranscation]=useState("");
  const[value,setValue]=useState("");
  const[amount,setAmount]=useState(0);
  function bank(e){
    e.preventDefault();
    if(!Transaction){
      alert("Please select Your Transaction");
    }
    else if(Transaction==="Deposite"){
      setAmount(amount+Number(value));
      console.log(amount+Number(value));
    }
    else{
      const temp=amount-Number(value);
      if(temp>0){
        setAmount(temp);
      }
      else{
        alert("Insufficient Balance");
      }
    }
    setValue("");
  }
  return (
    <div>
      <h2>Bank Application</h2>
      <form onSubmit={bank}>
      <label>Choose Your Transaction: </label>
      <select value={Transaction} onChange={(e)=>setTranscation(e.target.value)}>
        <option value=" disabled">...Select Transcation...</option>
        <option value="Deposite">Deposite</option>
        <option value="withDraw">Withdraw</option>
      </select>
       
      <br></br>
      <br></br>
      <br></br>
    
     <label>Enter The Amount: </label>  
      
      <input type='number' value={value} 
      onChange={(e)=>setValue(e.target.value)}></input>
       
      <button className='ok' type="submit">submit</button>
      <h2>Your  Bank Balance is Rs.{amount}</h2>
      </form>
    </div>
  )
}

export default App*/

import React, { useState } from 'react';

const App = () => {
  const [accounts, setAccounts] = useState([]);  
  const [selectedUser, setSelectedUser] = useState("");  
  const [transaction, setTransaction] = useState(""); 
  const [value, setValue] = useState(""); 
  const [newUserName, setNewUserName] = useState(""); 
  const [newUserEmail, setNewUserEmail] = useState(""); 
  const [newUserId, setNewUserId] = useState(""); 
 
  const createAccount = (e) => {
    e.preventDefault();
 
    if (!newUserName || !newUserEmail || !newUserId) {
      alert("Please fill all the fields to create an account.");
      return;
    }

    if (accounts.some((account) => account.id === newUserId)) {
      alert("Account with this User ID already exists.");
      return;
    }

    setAccounts([
      ...accounts,
      { id: newUserId, name: newUserName, email: newUserEmail, balance: 0 },
    ]);
 
    setNewUserName("");
    setNewUserEmail("");
    setNewUserId("");
  };
 
  const deleteAccount = (userId) => {
    setAccounts(accounts.filter((account) => account.id !== userId));
    if (selectedUser === userId) {
      setSelectedUser("");  
    }
  };
 
  const bank = (e) => {
    e.preventDefault();
    if (!selectedUser) {
      alert("Please select a user for the transaction.");
      return;
    }
    if (!transaction) {
      alert("Please select a transaction type.");
      return;
    }
    if (!value || Number(value) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    setAccounts(
      accounts.map((account) => {
        if (account.id === selectedUser) {
          if (transaction === "Deposit") {
            alert("Transaction Successful");
            return { ...account, balance: account.balance + Number(value) };
          } else if (transaction === "Withdraw") {
            if (account.balance >= Number(value)) {
              alert("Transaction Successful");
              return { ...account, balance: account.balance - Number(value) };
            } else {
              alert("Insufficient Balance");
            }
          }
        }
        return account;
      })
    );
    setValue(""); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Bank Application</h2>

       
      <form onSubmit={createAccount}>
        <h3>Create Account</h3>
        <input
          type="text"
          placeholder="Enter username"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter email"
          value={newUserEmail}
          onChange={(e) => setNewUserEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter user ID"
          value={newUserId}
          onChange={(e) => setNewUserId(e.target.value)}
        />
        <br />
        <button type="submit">Create Account</button>
      </form>
 
      <form onSubmit={bank}>
        <h3>Transaction</h3>
        <label>Select User: </label>
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="" disabled>
            --Select User--
          </option>
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.name} ({account.id})
            </option>
          ))}
        </select>
        <br />

        <label>Select Transaction: </label>
        <select
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
        >
          <option value="" disabled>
            --Select Transaction--
          </option>
          <option value="Deposit">Deposit</option>
          <option value="Withdraw">Withdraw</option>
        </select>
        <br />

        <label>Enter Amount: </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

       
      <h3>Accounts</h3>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>
            {account.name} (ID: {account.id}, Email: {account.email}, Balance: Rs.{account.balance})
            <button onClick={() => deleteAccount(account.id)}>Delete Account</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;





 



