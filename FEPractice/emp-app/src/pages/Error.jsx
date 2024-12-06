function ErrorPage({title, message}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{message}</p>
        </div>
    );
}

export default ErrorPage;