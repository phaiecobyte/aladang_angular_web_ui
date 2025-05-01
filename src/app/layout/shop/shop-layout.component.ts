import { Component } from "@angular/core";
import { ShopSidebarComponent } from "./shop-sidebar.component";
import { RouterOutlet } from "@angular/router";
import { ThemeSwitcherComponent } from "../../components/theme-switcher/theme-switcher.component";

@Component({
    selector: 'app-shop-layout',
    standalone: true,
    imports: [RouterOutlet, ThemeSwitcherComponent],
    template: `
<div class="container-fluid p-0">
    <!-- Top Navbar -->
    <div class="row g-0">
        <div class="col-12 bg-dark text-white shadow">
            <div class="d-flex justify-content-between align-items-center p-3">
                <a class="navbar-brand text-uppercase fw-bold text-white m-0">
                    <i class="bi bi-shop me-2 text-warning"></i>MIS SHOP
                </a>
                <app-theme-switcher/>
                <button class="btn btn-outline-light d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                    <i class="bi bi-list"></i>
                </button>
            </div>
        </div>
    </div>

    <div class="row g-0">
        <!-- Sidebar - Collapsible on mobile -->
        <div class="col-md-2 col-lg-2 collapse d-md-block" id="sidebarMenu">
            <div class="bg-primary bg-gradient vh-100 overflow-auto sidebar">
                <!-- User Info -->
                <div class="text-center py-3 text-white border-bottom mb-2">
                    <img src="favicon.ico" class="img-fluid rounded-circle mb-3" alt="User" width="45" height="45">
                    <h6 class="mb-0">Admin User</h6>
                    <small>Administrator</small>
                </div>

                <!-- Navigation -->
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3 border-start border-3 border-warning">
                            <i class="bi bi-house me-2"></i> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3">
                            <i class="bi bi-truck me-2"></i> Delivery
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3">
                            <i class="bi bi-shop me-2"></i> Shop
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3">
                            <i class="bi bi-box me-2"></i> Product
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3">
                            <i class="bi bi-basket3 me-2"></i> Order
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3">
                            <i class="bi bi-qr-code-scan me-2"></i> Pay Me
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3 d-flex justify-content-between align-items-center"
                           data-bs-toggle="collapse" data-bs-target="#reportSubmenu"
                           aria-expanded="false" aria-controls="reportSubmenu">
                            <span><i class="bi bi-file-earmark-text me-2"></i> Report</span>
                            <i class="bi bi-chevron-down small"></i>
                        </a>
                        <div class="collapse" id="reportSubmenu">
                            <ul class="nav flex-column bg-primary bg-opacity-75 ms-3">
                                <li class="nav-item">
                                    <a href="" class="nav-link text-white py-2 ps-4">
                                        <i class="bi bi-file-earmark-text me-2"></i> Report 1
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link text-white py-2 ps-4">
                                        <i class="bi bi-file-earmark-text me-2"></i> Report 2
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="" class="nav-link text-white py-2 ps-4">
                                        <i class="bi bi-file-earmark-text me-2"></i> Report 3
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link text-white py-3 px-3">
                            <i class="bi bi-gear me-2"></i> Settings
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="col-md-9 col-lg-10 p-0">
            <div class="p-4">
                <!-- Breadcrumb -->
                <nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                </nav>

                <!-- Content Area -->
                <div class="bg-light p-4 rounded shadow-sm">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    </div>
</div>
    `
})
export class ShopLayoutComponent { }