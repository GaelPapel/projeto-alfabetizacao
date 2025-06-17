// resources/js/Layouts/AppLayout.jsx

import React from 'react';
import '../../css/app.css'; 
import Sidebar from '@/Components/Sidebar/Sidebar'; // Se sua Sidebar faz parte do layout

function AppLayout({ children }) {
    return (
        <div className="App">
            <Sidebar />
            <main className="App-main-content">
                <section className="App-content">
                    {children}
                </section>
                <footer className="App-footer">
                    <p>&copy; 2025 Projeto Alfabetização.</p>
                </footer>
            </main>
        </div>
    );
}

export default AppLayout;