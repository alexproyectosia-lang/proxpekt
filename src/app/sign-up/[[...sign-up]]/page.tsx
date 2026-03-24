import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#F4F6F8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter, sans-serif'
        }}>
            <img
                src="/logo.png"
                alt="Proxpekt"
                style={{
                    width: '200px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto 8px auto',
                    objectFit: 'contain'
                }}
            />
            <p style={{
                color: '#6B7280',
                fontSize: '14px',
                marginBottom: '24px',
                textAlign: 'center'
            }}>
                Inteligencia Comercial B2B para México
            </p>
            <SignUp />
        </div>
    );
}