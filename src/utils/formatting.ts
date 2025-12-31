// Format date string to readable format
export function formatDate(dateString: string): string {
  if (!dateString) return ''
  
  // Handle "Present" or similar
  if (dateString.toLowerCase() === 'present' || dateString.toLowerCase() === 'current') {
    return 'Present'
  }
  
  // Handle YYYY-MM format
  const yearMonthMatch = dateString.match(/^(\d{4})-(\d{2})$/)
  if (yearMonthMatch) {
    const [, year, month] = yearMonthMatch
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }
  
  // Handle YYYY format
  if (/^\d{4}$/.test(dateString)) {
    return dateString
  }
  
  // Return as-is if format not recognized
  return dateString
}

// Format GPA with max GPA
export function formatGPA(gpa: number, maxGpa: number = 10.0): string {
  return `${gpa.toFixed(2)}/${maxGpa.toFixed(1)}`
}

// Truncate text to specified length
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}

