export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh',
      backgroundColor: '#F4F6F8',
      color: '#1A1A2E',
      fontFamily: 'Inter, sans-serif'
    }}>
      
      {/* SIDEBAR */}
      <aside style={{
        width: '240px',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 0'
      }}>
        
        {/* Logo */}
        <div style={{ padding: '0 20px 32px 20px', borderBottom: '1px solid #E5E7EB' }}>
          <img
            src="/logo.png"
            alt="Proxpekt"
            style={{ width: '160px', height: 'auto' }}
          />
          <p style={{ 
            fontSize: '11px', 
            color: '#6B7280', 
            marginTop: '6px',
            letterSpacing: '0.5px'
          }}>Inteligencia Comercial B2B</p>
        </div>

        {/* Nav Items */}
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          {[
            { icon: '🔍', label: 'Buscar Prospectos', active: true },
            { icon: '🏢', label: 'Empresas', active: false },
            { icon: '📋', label: 'Mis Leads', active: false },
            { icon: '📊', label: 'Dashboard', active: false },
            { icon: '⚡', label: 'Señales HOT', active: false },
            { icon: '📅', label: 'Calendario', active: false },
            { icon: '💬', label: 'Mensajes IA', active: false },
          ].map((item) => (
            <div key={item.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              marginBottom: '2px',
              backgroundColor: item.active ? '#EEF2FF' : 'transparent',
              borderLeft: item.active ? '3px solid #00338D' : '3px solid transparent',
              cursor: 'pointer',
            }}>
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              <span style={{ 
                fontSize: '13px', 
                fontWeight: item.active ? 600 : 400,
                color: item.active ? '#00338D' : '#6B7280'
              }}>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Upgrade Banner */}
        <div style={{ padding: '12px 16px' }}>
          <div style={{
            backgroundColor: '#00338D',
            borderRadius: '10px',
            padding: '14px',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#CCFF00' }}>⚡ Plan Starter</p>
            <p style={{ fontSize: '11px', color: '#93C5FD', marginTop: '4px' }}>10 búsquedas restantes</p>
            <div style={{
              marginTop: '10px',
              backgroundColor: '#CCFF00',
              borderRadius: '6px',
              padding: '6px 12px',
              textAlign: 'center',
              fontSize: '11px',
              fontWeight: 700,
              color: '#00338D',
              cursor: 'pointer'
            }}>Upgrade →</div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        {/* Header */}
        <header style={{
          padding: '20px 32px',
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FFFFFF'
        }}>
          <div>
            <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A2E' }}>Buscar Prospectos</h1>
            <p style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>1,022,847 empresas mexicanas verificadas</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{
              backgroundColor: '#F4F6F8',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '13px',
              color: '#6B7280',
              cursor: 'pointer'
            }}>🔔 Daily Brief</div>
            <div style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#00338D',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: 700,
              color: '#CCFF00',
              cursor: 'pointer'
            }}>A</div>
          </div>
        </header>

        {/* Search Bar */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid #E5E7EB', backgroundColor: '#FFFFFF' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input 
              placeholder="🔍  Buscar empresa, sector, municipio..."
              style={{
                flex: 1,
                backgroundColor: '#F4F6F8',
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                padding: '12px 16px',
                fontSize: '14px',
                color: '#1A1A2E',
                outline: 'none',
              }}
            />
            <button style={{
              backgroundColor: '#00338D',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer'
            }}>Buscar</button>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Nuevo León', 'Manufactura', '50-200 empleados', 'Señal HOT', 'SAT Activo'].map((filter) => (
              <div key={filter} style={{
                backgroundColor: '#EEF2FF',
                border: '1px solid #C7D2FE',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '12px',
                color: '#00338D',
                cursor: 'pointer',
                fontWeight: 500
              }}>{filter}</div>
            ))}
            <div style={{
              backgroundColor: '#F4F6F8',
              border: '1px solid #E5E7EB',
              borderRadius: '20px',
              padding: '6px 14px',
              fontSize: '12px',
              color: '#6B7280',
              cursor: 'pointer'
            }}>+ Más filtros</div>
          </div>
        </div>

        {/* Results */}
        <div style={{ flex: 1, overflow: 'auto', padding: '24px 32px' }}>
          
          {/* Stats Row */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'HOT leads hoy', value: '47', color: '#DC2626', bg: '#FEF2F2' },
              { label: 'WARM leads', value: '183', color: '#D97706', bg: '#FFFBEB' },
              { label: 'Total encontrados', value: '2,847', color: '#00338D', bg: '#EEF2FF' },
            ].map((stat) => (
              <div key={stat.label} style={{
                backgroundColor: stat.bg,
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                padding: '16px 20px',
                flex: 1
              }}>
                <p style={{ fontSize: '28px', fontWeight: 800, color: stat.color }}>{stat.value}</p>
                <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Lead Cards */}
          {[
            { 
              name: 'Grupo Industrial Vitro', 
              sector: 'Manufactura · Vidrio',
              location: 'Monterrey, NL',
              employees: '850 empleados',
              score: 92,
              badge: 'HOT',
              signal: '🔴 Director nuevo hace 18 días',
              health: '✅ SAT activo'
            },
            { 
              name: 'Femsa Logística SA de CV', 
              sector: 'Logística · Distribución',
              location: 'San Pedro, NL',
              employees: '1,200 empleados',
              score: 78,
              badge: 'HOT',
              signal: '🔴 Contrato Compranet $2.3M',
              health: '✅ SAT activo'
            },
            { 
              name: 'Tecnológica del Norte', 
              sector: 'Tecnología · Software',
              location: 'Monterrey, NL',
              employees: '45 empleados',
              score: 65,
              badge: 'WARM',
              signal: '🟡 Vacante Gerente de Ventas',
              health: '✅ SAT activo'
            },
            { 
              name: 'Constructora Regia SA de CV', 
              sector: 'Construcción',
              location: 'Guadalupe, NL',
              employees: '120 empleados',
              score: 58,
              badge: 'WARM',
              signal: '🟡 Marca IMPI registrada',
              health: '⚠️ Verificar SAT'
            },
          ].map((lead) => (
            <div key={lead.name} style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '20px 24px',
              marginBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
            }}>
              {/* Score Badge */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: lead.badge === 'HOT' ? '#FEF2F2' : '#FFFBEB',
                border: `2px solid ${lead.badge === 'HOT' ? '#DC2626' : '#D97706'}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ 
                  fontSize: '18px', 
                  fontWeight: 800,
                  color: lead.badge === 'HOT' ? '#DC2626' : '#D97706'
                }}>{lead.score}</span>
                <span style={{ 
                  fontSize: '8px', 
                  fontWeight: 700,
                  color: lead.badge === 'HOT' ? '#DC2626' : '#D97706',
                  letterSpacing: '1px'
                }}>{lead.badge}</span>
              </div>

              {/* Company Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1A1A2E' }}>{lead.name}</h3>
                  <span style={{ fontSize: '11px', color: '#6B7280' }}>{lead.location}</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#6B7280' }}>{lead.sector}</span>
                  <span style={{ fontSize: '12px', color: '#6B7280' }}>{lead.employees}</span>
                  <span style={{ fontSize: '12px', color: '#16A34A', fontWeight: 600 }}>{lead.health}</span>
                </div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: '#F4F6F8',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '12px',
                  color: '#1A1A2E',
                  border: '1px solid #E5E7EB'
                }}>{lead.signal}</div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <button style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  color: '#6B7280',
                  cursor: 'pointer',
                  fontWeight: 500
                }}>+ Pipeline</button>
                <button style={{
                  backgroundColor: '#00338D',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  cursor: 'pointer'
                }}>⚡ Ejecutar</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}