@testset "apikey" begin
  @test length(SteamWebAPIs.key)==32
  
  @test_throws DomainError SteamWebAPIs.is_above_zero(-1,0,1)
end