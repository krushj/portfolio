import type { Improvement, CalculatedMetric } from '../types/Project'

// Format value with unit: just add unit to number
export function formatValue(value: number, unit?: string): string {
  if (!unit) {
    return value.toLocaleString()
  }
  return `${value}${unit}`
}

// Calculate metric: percentage from before and after
export function calculateMetric(metric: Improvement): CalculatedMetric {
  const change = metric.before - metric.after
  const percentage = Math.round(Math.abs((change / metric.before) * 100))
  
  // If after < before, it's an improvement
  const type = metric.after < metric.before ? 'improvement' : 'reduction'
  
  return {
    label: metric.label,
    percentage,
    displayBefore: formatValue(metric.before, metric.unit),
    displayAfter: formatValue(metric.after, metric.unit),
    type
  }
}

// Calculate multiple metrics
export function calculateMetrics(metrics: Improvement[]): CalculatedMetric[] {
  if (!metrics || metrics.length === 0) {
    return []
  }
  
  return metrics.map(calculateMetric)
}

// Get color class for metric type
export function getMetricColor(type: 'improvement' | 'reduction'): string {
  return type === 'improvement' 
    ? 'bg-green-500 dark:bg-green-600' 
    : 'bg-red-500 dark:bg-red-600'
}
