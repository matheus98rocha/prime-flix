import { memo, useMemo, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { Logo, UserWrapper, Wrapper } from "./header.styles";
import { useAuthContext } from "../../context/authContext";
import { servicesFirebase } from "../../services/firebase/firebaseServices";
import { FaUserCircle } from "react-icons/fa";
import ModalUser from "./components/ModalUser/ModalUser";

const Header = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const { userData } = useAuthContext();
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const firstName = useMemo(
    () => userData.displayName.split(" ")[0],
    [userData.displayName]
  );
  const navItems = [
    {
      route: "my-movies",
      label: "Meus Filmes",
    },
  ];

  const handleScrollY = () => {
    if (window.scrollY >= 80) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };

  window.addEventListener("scroll", handleScrollY);

  console.log(userData);

  return (
    <Wrapper active={scrollPage}>
      {isOpenModalUser && (
        <ModalUser handleLogout={() => servicesFirebase.logout(userData)} />
      )}
      <Logo to="/">
        <BiCameraMovie /> WatchMe
      </Logo>
      <UserWrapper onClick={() => setIsOpenModalUser(!isOpenModalUser)}>
        <div className="user-image-wrapper">
          {userData.photoURL.length > 0 ? (
            <img src={userData.photoURL} alt="profile-user" />
          ) : (
            <FaUserCircle />
          )}
        </div>
        <p className="user-name">{firstName}</p>
      </UserWrapper>
    </Wrapper>
  );
};

export default memo(Header);
