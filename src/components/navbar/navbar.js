import React, { memo, useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./navbar.css";

const NavBar = memo(({ setToken }) => {
    let location = useLocation();
    const navigate = useNavigate();

    const Links = [
        // { id: 1, pathname: "/staff/", name: "Сотрудники" },
        { id: 2, pathname: "/doctors/", name: "Врачи" },
        { id: 3, pathname: "/nurses/", name: "Медсестры" },
    ];

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location])

    const confirmMessage = () => {
        Swal.fire({
            title: "Вы уверены?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#32b482",
            cancelButtonColor: "#d33",
            cancelButtonText: "Нет",
            confirmButtonText: "Да, выйти",
        }).then((result) => {
            if (result.value) {
                localStorage.removeItem("token");
                setToken(false)
                navigate('/');
            }
        });
    };

    return (
        <aside>
            <nav className="navigationComponent">

                {Links.map((link) => (
                    <Link
                        key={link.id}
                        to={link.pathname}
                        onClick={() => setActiveLink(link.pathname)}
                        className={`categories ${link.pathname === activeLink ? "active-link" : ""
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}

                <div className="categories" onClick={confirmMessage}>
                    Выйти
                </div>
            </nav>
        </aside>
    );
});

export default NavBar;
