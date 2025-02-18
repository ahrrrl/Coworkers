import { Button } from '@/components/ui/button';
import { IconRepair } from '@/public/icon/IconRepair';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-full min-w-[375px] h-full'>
      <div className="w-full h-[640px] sm:h-screen bg-[url('/img/main_size=small.svg')] sm:bg-[url('/img/main_size=medium.svg')] lg:bg-[url('/img/main_size=large.svg')] bg-cover bg-center flex flex-col items-center">
        <div className='flex h-full flex-col justify-between items-center pt-14 sm:pt-24 lg:pt-20'>
          <div className='flex flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-5'>
            <div className='flex items-center justify-center gap-1 sm:gap-4 lg:gap-6'>
              <h2 className='text-2xl font-semibold text-text-primary sm:text-[40px] lg:text-5xl'>
                함께 만들어가는 투두 리스트
              </h2>
              <IconRepair className='sm:w-12 sm:h-12 lg:w-14 lg:h-14' />
            </div>
            <h1 className='text-transparent font-semibold bg-clip-text bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to text-[32px] sm:text-5xl lg:text-[64px]'>
              Coworkers
            </h1>
          </div>
          <Button className='mb-12 sm:mb-[120px] sm:w-[373px] rounded-[32px] bg-gradient-to-r from-brand-gradient-from to-brand-gradient-to text-white'>
            지금 시작하기기
          </Button>
        </div>
      </div>
    </main>
  );
}
