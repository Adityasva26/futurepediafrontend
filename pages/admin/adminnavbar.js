function AdminNavBar() {
    return ( <>
    <nav class="navbar cust-nav navbar-expand-lg navbar-light bg-light border-bottom">
                    <div class="container-fluid">
                        {/* <button class="btn btn-primary" id="sidebarToggle">Toggle Menu</button> */}
                        {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                                <li class="nav-item ">
                                    <a class="nav-link " href="#" role="button">Logout</a>
                                    
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </> );
}

export default AdminNavBar;