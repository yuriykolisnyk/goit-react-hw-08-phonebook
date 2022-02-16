// import { useSelector } from 'react-redux';
// import { authSelectors } from '../../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  // const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUsername);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать</span>
      <button type="button">Выйти</button>
    </div>
  );
}
