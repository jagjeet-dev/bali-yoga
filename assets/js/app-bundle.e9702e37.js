"use strict";(self.webpackChunkrishikesh_healing_school=self.webpackChunkrishikesh_healing_school||[]).push([[143],{685:function(){let e="show",t=e=>{"none"!==window.getComputedStyle(e).display&&(e.style.height=e.scrollHeight+"px",e.scrollHeight,e.style.height="0"),e.addEventListener("transitionend",s)};function s(){0==this.offsetHeight?this.classList.remove(e):this.classList.add(e),this.removeEventListener("transitionend",s),this.removeAttribute("style")}let n=e=>{e.classList.add("animating"),e.addEventListener("animationend",i)};function i(){this.classList.remove("animating"),this.removeEventListener("animationend",i)}new class{constructor(){this.navbarMenu=document.querySelector(".bys-header .bys-navbar"),this.openedMenu=document.querySelector(".bys-header .navbar-toggler-open"),this.closedMenu=document.querySelector(".bys-header .navbar-toggler-close"),this.menuOverlay=document.querySelector(".bys-header .navbar-overlay"),this.navOpenClass="navbar-opened",this.events()}events(){this.openedMenu.addEventListener("click",(()=>this.toggleMenu())),this.closedMenu.addEventListener("click",(()=>this.toggleMenu())),this.menuOverlay.addEventListener("click",(()=>this.toggleMenu())),this.navbarMenu.addEventListener("click",(e=>this.menuItemClick(e))),window.addEventListener("resize",(()=>this.resizeScreen())),window.addEventListener("scroll",(e=>this.stickyElement(e)))}toggleMenu(){document.body.classList.toggle(this.navOpenClass),n(this.menuOverlay),n(this.navbarMenu)}menuItemClick(n){if(n.target.hasAttribute("data-toggle")&&window.innerWidth<=992){n.preventDefault();const a=n.target.parentElement;var i=a.querySelector(".submenu");i&&(a.classList.contains("active")?(a.classList.remove("active"),t(i)):(a.parentElement.querySelectorAll(".menu-item.has-submenu.active .submenu").forEach((e=>{t(e),e.parentElement.classList.remove("active")})),(t=>{"none"===window.getComputedStyle(t).display&&t.classList.add(e);let n=t.scrollHeight;t.style.height=0,t.scrollHeight,t.style.height=n+"px",t.addEventListener("transitionend",s)})(i),a.classList.add("active")))}}collapseSubMenu(){this.navbarMenu.querySelectorAll(".menu-item.has-submenu.active .submenu").forEach((e=>{e.classList.remove("show"),e.parentElement.classList.remove("active")}))}resizeScreen(){window.innerWidth>992&&(document.body.classList.contains(this.navOpenClass)&&this.toggleMenu(),this.navbarMenu.querySelector(".menu-item.has-submenu.active")&&this.collapseSubMenu())}stickyElement(e){var t=document.querySelector(".bys-header"),s=getComputedStyle(t).height.split("px")[0],i=window.scrollY,a="header-sticky";i>s?(document.body.classList.contains(a)||n(t),document.body.classList.add(a)):i<s&&(document.body.classList.remove(a),t.classList.remove("animating"))}}}},function(e){e(e.s=685)}]);