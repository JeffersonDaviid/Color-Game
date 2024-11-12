import { useState } from 'react'

const useStateFetch = () => {
	const [loading, setLoading] = useState(false)

	return { loading, setLoading }
}

export default useStateFetch
