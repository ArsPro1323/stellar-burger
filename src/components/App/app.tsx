import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import MainContent from '../main/main';

export default function App() {
  return(
    <div className={styles.mainWindow}>
      <AppHeader />
      <MainContent />
    </div>
  )
}