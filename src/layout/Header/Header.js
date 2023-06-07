import { memo, useEffect, useMemo, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { Logo, UserWrapper, Wrapper } from "./header.styles";
import { useAuthContext } from "../../context/authContext";
import { servicesFirebase } from "../../services/firebase/firebaseServices";
import { FaUserCircle } from "react-icons/fa";
import ModalUser from "./components/ModalUser/ModalUser";
import Loading from "../../componentes/Loading/Loading";
import { convertEmailToUserName } from "./utils/convertEmailToUserName";

const Header = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const { userData } = useAuthContext();
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (userData.displayName !== null) {
      const firstNameCallback = userData.displayName.split(" ")[0];
      setFirstName(firstNameCallback);
    } else {
      const formatedUserName = convertEmailToUserName(userData.email);
      setFirstName(formatedUserName);
    }
  }, [userData]);

  const handleScrollY = () => {
    if (window.scrollY >= 80) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };

  window.addEventListener("scroll", handleScrollY);

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
          {userData.photoURL !== null ? (
            <img src={userData.photoURL} alt="profile-user" />
          ) : (
            <FaUserCircle size={30} color="#ffff" />
          )}
        </div>
        <p className="user-name">{firstName}</p>
      </UserWrapper>
    </Wrapper>
  );
};

export default memo(Header);
