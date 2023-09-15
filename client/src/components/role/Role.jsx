function Role({imgFile, name, role}) {
    return (
        <div className="text-center">
            <img className="role mb-2" src={require(`../../img/${imgFile}`)} alt={name} />
            <h5>{name}</h5>
            <p>{role}</p>
        </div>
    );
}

export default Role;