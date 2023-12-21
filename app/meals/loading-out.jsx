import styles from './Loading.module.css';

const Loader = () => {
    return (
        <p className={styles.loading}>Fetching meals...</p>
    )
}

export default Loader;