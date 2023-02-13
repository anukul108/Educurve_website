var str = `<div class="nav">
            <div class="nav-top">
                <div class="top-left">
                    <a href="./"><img src="img/logo.png" alt="" id="logo"></a>
                </div>
                <!-- <p class="navigation-slider" onclick="navigation_slider()">☰</p> -->
                <div class="top-right">
                        <div class = "header-name">
                            <div class="det">
                                <a href="cart.php">
                                     <div class="icon">
                                        <i class="fa fa-magnifying-glass"></i>
                                    </div>
                                    <p>Search</p>
                                </a>
                            </div> 
                        </div>
                        <div class = "header-name">
                            <div class="det">
                                <a href="cart.php">
                                     <div class="icon">
                                        <i class="fa fa-user"></i>
                                    </div>
                                    <p>User</p>
                                </a>
                            </div> 
                            
                        </div>
                        <div class = "header-name">
                            <div class="det">
                                <a href="order.html">
                                     <div class="icon">
                                        <i class="fa fa-truck"></i>
                                    </div>
                                    <p>Orders</p>
                                </a>
                            </div> 
                        </div>
                        <div class = "header-name">
                            <div class="det">
                                <a href="cart.php">
                                     <div class="icon">
                                        <i class="fa fa-bell"></i>
                                    </div>
                                    <p>Notification</p>
                                </a>
                            </div> 
                        </div>
                        <div class = "header-name">
                            <div class="det">
                                <a href="cart.php">
                                     <div class="icon">
                                        <i class="fas fa-shopping-bag"></i>
                                    </div>
                                    <p>Wishlist</p>
                                </a>
                            </div> 
                        </div>
                        <div class = "header-name">
                            <div class="det">
                                <a href="cart.html">
                                     <div class="icon">
                                        <i class="fas fa-shopping-bag"></i>
                                    </div>
                                    <p>Bag</p>
                                </a>
                            </div> 
                        </div>
                </div>
            </div>
            
            <div class="pdt-name"></div>
        </div>`;

document.getElementById("header").innerHTML = str;