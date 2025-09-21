const Badge = ({size}: {size: "sm" | "md" | "lg"}) => {
  return (
    <div className={`${size}`}>
        <span>Badge</span>
    </div>
  )
}

export default Badge