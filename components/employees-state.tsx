import { BadgeCheckIcon, UserCheck2Icon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'

const EmployeesState = () => {
  const totalEmployees = 100
  const employeesPresent = 80
  const employeesOfTheMonth = (employeesPresent / totalEmployees) * 100
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      <Card className='border-green-300'>
        <CardHeader>
          <CardTitle className='text-base '>Total Employees</CardTitle>
          <CardContent className='flex justify-between'>
            <div className='flex gap-2'>
              <UserIcon />
              <div className='text-5xl'>100</div>
            </div>
            <div className='font-bold'>
              <Button size='xs' asChild>
                <Link href='/dashboard/employees'>View All</Link>
              </Button>
            </div>
          </CardContent>
        </CardHeader>
      </Card>

      <Card className='border-blue-300'>
        <CardHeader>
          <CardTitle className='text-base'>Employees Present</CardTitle>
          <CardContent className='flex justify-between'>
            <div className='flex gap-2'>
              <UserCheck2Icon />
              <div className='text-5xl'>80</div>
            </div>
          </CardContent>
          <CardFooter>
            <span className='text-xs text-green-500 flex gap-2 items-center'>
              <BadgeCheckIcon />
              80% of employees are present
            </span>
          </CardFooter>
        </CardHeader>
      </Card>

      <Card className='border-pink-300'>
        <CardHeader>
          <CardTitle className='text-base'>Employees of the months</CardTitle>
          <CardContent className='flex justify-between'>
            <div className='flex gap-2'>
              <UserIcon />
              <div className='text-5xl'>80</div>
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default EmployeesState
