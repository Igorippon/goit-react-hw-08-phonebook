const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: '50px',
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
        color: 'rgba(17, 24, 39, 0.9)',
    },
};

export default function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                Contacts manager welcome page{' '}
                <span role="img" aria-label="Greeting icon">
                    💁‍♀️☎
                </span>
            </h1>
        </div>
    );
}
