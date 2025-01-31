import { useGoTo } from '@lib/utils';

export const Logo = () => {
    const goTo = useGoTo();

    return (
        <div className="flex items-center gap-2" onClick={() => goTo('/')}>
            <img src="https://img.freepik.com/vecteurs-premium/illustration-logo-cuisine-fond-solide_852896-5187.jpg?semt=ais_hybrid" alt="logo" className="w-20 h-20 rounded-md cursor-pointer"/>
        </div>
    )
}