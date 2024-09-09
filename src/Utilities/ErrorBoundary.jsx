
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='error-boundary'>
                    <h1>Something went wrong.</h1>
                    <p>We are working to fix the problem. Please try again later.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
