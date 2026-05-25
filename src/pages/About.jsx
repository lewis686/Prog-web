function About() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ borderBottom: '2px solid #2196F3', paddingBottom: '10px', display: 'inline-block' }}>
        Despre Mine
      </h1>
      <p style={{ fontSize: '1.2rem', margin: '20px 0', lineHeight: '1.6' }}>
        Student la <strong><b>Facultatea de Inginerie Electrică și Știința Calculatoarelor</b></strong>, anul 2.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
        <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '10px', minWidth: '220px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <h3 style={{ color: '#4CAF50', marginTop: '0' }}><b>Likes</b></h3>
          <p style={{ margin: '0', color: '#eaeaea' }}>Aviation, Cars, Technology,<br/>Gaming, Food</p>
        </div>
        <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '10px', minWidth: '220px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <h3 style={{ color: '#f44336', marginTop: '0' }}><b>Dislikes</b></h3>
          <p style={{ margin: '0', color: '#eaeaea' }}>Dirty environments</p>
        </div>
        <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '10px', minWidth: '220px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <h3 style={{ color: '#ff9800', marginTop: '0' }}><b>Hobbies</b></h3>
          <p style={{ margin: '0', color: '#eaeaea' }}>Photography, Indie Game Dev,<br/>Gaming, Cooking</p>
        </div>
      </div>
      <p style={{ marginTop: '50px', fontStyle: 'italic', fontSize: '0.9rem', color: '#888' }}>
        <b><strong>"One more game won't hurt... right?"</strong></b>
      </p>

    </div>
  );
}

export default About;