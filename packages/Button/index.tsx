// packages/TextView/index.tsx
import React from 'react';
import './index.less'

interface TextViewProps {
    children?: React.ReactNode
}

const TextView = ({ children }: TextViewProps) => {
    return <button className='text-view'>
        {children}
    </button>
}

export default TextView;