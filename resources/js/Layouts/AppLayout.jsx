// resources/js/Layouts/AppLayout.jsx

import React, { useState, useEffect } from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';
import styles from './AppLayout.module.css'; 

function AppLayout({ children }) {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('success');

    const showMessage = (msg, type = 'info', duration = 30) => {
        setMessage(msg);
        setMessageType(type);
        setTimeout(() => {
            setMessage('');
        }, duration);
    };

    return (
        <div className={styles.appWrapper}> {/* Wrapper principal */}
            {/* Mensagem de feedback animada */}
            {message && (
                <div className={`${styles.feedbackMessage} ${styles[messageType]}`}>
                    {message}
                </div>
            )}

            <Sidebar />

            <div className={styles.mainContentArea}> 
                <header className={styles.appHeader}>
                    <h1 className={styles.headerTitle}></h1>
                    <nav className={styles.headerNav}>
                
                        <a href="#" className={styles.navLink}>Ajuda</a>
                        <a href="#" className={styles.navLink}>Perfil</a>
                    </nav>
                </header>

                <main className={styles.pageContent}> 
                    {children}
                </main>

                <footer className={styles.appFooter}>
                    <p>&copy; 2025 Projeto Alfabetização. Todos os direitos reservados.</p>
                    <div className={styles.footerLinks}>
                        <a href="#" className={styles.footerLink}>Privacidade</a>
                        <a href="#" className={styles.footerLink}>Termos</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default AppLayout;