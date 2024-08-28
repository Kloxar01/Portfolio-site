const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Vancouver, Canada</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Phone number</h2>
                            <p><a href="tel:+12369906767">+1 (236) 990-67-67</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:egor.anenkov98@gmail.com">egor.anenkov98@gmail.com</a></p>
                        </li>
                    </ul>

            </div>
        </main> 
    );
}
 
export default Contacts;