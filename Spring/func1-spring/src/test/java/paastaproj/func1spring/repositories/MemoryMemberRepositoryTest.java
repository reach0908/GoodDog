package paastaproj.func1spring.repositories;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import paastaproj.func1spring.domain.Member;

public class MemoryMemberRepositoryTest {

    MemoryMemberRepository repository = new MemoryMemberRepository();

    @Test
    public void save(){
        Member member = new Member();
        member.setName("spring");

        repository.save(member);

        Member result = repository.findById(member.getId()).get();
        //System.out.println("result = "+ (result==member));
        //Assertions.assertEquals(member,result);
        Assertions.assertThat(member).isEqualTo(result);

    }
}
