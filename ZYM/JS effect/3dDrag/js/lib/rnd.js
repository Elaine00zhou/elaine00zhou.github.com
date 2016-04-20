define(function()
{
	function rnd(n,m)
	{
		return parseInt(n+Math.random()*(m-n));
	}
	return rnd;
})