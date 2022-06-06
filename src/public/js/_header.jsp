<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="/css/showProduct.css">
    <link rel="stylesheet" href="/css/themify-icons/themify-icons.css">
    <link rel="shortcut icon" href="/image/spicon.png" type="image/x-icon" />
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết sản phẩm</title>
</head>

<body>
    <div class="nav_bar">
        <div class="container_nav_bar">
            <div class="nav_bar_items">
                <ul type='none'>
                    <li><a class="nutdangki" href="/seller" target="_blank">Kênh Người Bán</a></li>
                    <li><a class="nutdangki" href="/buyer/PurchaseList" target="_blank">Kênh người Mua</a></li>
                    <li>Tải ứng dụng</li>
                    <li>Kết nối
                        <i class="ti-facebook"></i>
                        <i class="ti-instagram"></i>

                    </li>
                </ul>
            </div>

            <div class="nav_bar_links">
                <ul type='none'>
                    <li class="noti_link"><a href=""><i class="ti-bell"></i>Thông báo</a>
                        <div class="notification">
                            <div class="noti_header">
                                <p>Thông báo mới nhận</p>
                            </div>
                            <div class="noti_container">
                                <div class="request">
                                    <div class="signin_request"><a class="item_image__server_render" href="/login">Đăng
                                            Nhập</a></div>
                                    <div class="signup_request"><a class="item_image__server_render" href="/dangki"
                                            target="_blank">Đăng
                                            Ký</a></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href=""><i class="ti-help-alt"></i> Hỗ trợ</a></li>
                    <li class="language_link"><a href=""><i class="ti-world"></i> Tiếng Việt</a>
                        <div class="language_options">
                            <p class="lang">Tiếng Anh</p>
                            <p class="lang">Tiếng Nhật</p>
                            <p class="lang">Tiếng Trung</p>

                        </div>
                    </li>

                    <% if(loginUser){ %>
                        <li class="signin">

                            Hello <%= loginUser %>
                                ID: <%= userId %>
                                    <% } %>
                        </li>

                        <% if(!loginUser){ %>
                            <li class="signup"><a class="nutdangki" href="/dangki" target="_blank">

                                    Đăng Ký
                                    <% } %>
                                </a></li>

                            <% if(!loginUser){ %>
                                <li class="signin"><a class="nutdangki" href="/login">

                                        Đăng Nhập
                                        <% } %>
                                    </a></li>

                                <% if(loginUser){ %>
                                    <li class="signin"><a class="nutdangki" href="/logout">

                                            Đăng Xuất
                                            <% } %>
                                        </a></li>
                </ul>
            </div>
        </div>

        <div class="container_wrapper">
            <div class="logo">
                <a href="/home"><img class="sp_logo" src="/image/xóp pi logo.png" alt=""></a>
            </div>
            <div>
                <div class="search_bar">
                    <input type="text">
                    <div class="search_icon">
                        <i style="color: white;" class="ti-search"></i>
                    </div>
                </div>
                <div class="suggestion">
                    <p>Váy</p>
                    <p>Dép</p>
                    <p>Dép nữ</p>
                    <p>Túi xách nữ</p>
                    <p>Áo Croptop</p>
                    <p>Chân váy</p>
                    <p>Áo phông</p>
                    <p>Giày cao gót</p>
                </div>
            </div>

            <div class="cart">
                <i style="font-size:32px;color:white" class="ti-shopping-cart"></i>
            </div>
        </div>
    </div>