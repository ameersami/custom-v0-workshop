'use client';

import * as React from 'react';

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  errorMessage?: any;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({
      hasError: true,
      errorMessage: error
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          {JSON.stringify(this.state.errorMessage)}
        </div>
      );
    }

    return this.props.children;
  }
}