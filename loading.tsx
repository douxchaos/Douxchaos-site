import { BrandLockup } from '@/components/logo'

export default function Loading() {
  return (
    <div className="marble-bg fixed inset-0 z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-8 animate-fade-in">
        <BrandLockup markClassName="h-auto w-64 rounded-lg animate-fade-up" />
        <div className="relative h-px w-40 overflow-hidden bg-border">
          <span className="absolute inset-y-0 left-0 w-1/2 animate-[shimmer_1.6s_ease-in-out_infinite] bg-primary" />
        </div>
      </div>
    </div>
  )
}
