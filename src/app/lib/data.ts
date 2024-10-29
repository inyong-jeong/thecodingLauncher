import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'
import { Revenue } from './definitions'

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore()
  try {
    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql`SELECT * FROM users`

    // console.log('Data fetch completed after 3 seconds.');
    return data.rows
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch revenue data.')
  }
}
